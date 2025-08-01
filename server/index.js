const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'petermwendwa94@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// In-memory storage for demo (use database in production)
let contacts = [];
let projects = [];
let certifications = [];
let users = [
  {
    id: 1,
    email: 'admin@petermutua.dev',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin'
  }
];

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Store contact message
    const contact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      read: false
    };
    
    contacts.push(contact);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'petermwendwa94@gmail.com',
      to: 'petermwendwa94@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Authentication
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Back office routes (protected)

// Get all contacts
app.get('/api/admin/contacts', authenticateToken, (req, res) => {
  res.json(contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

// Mark contact as read
app.put('/api/admin/contacts/:id/read', authenticateToken, (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (contact) {
    contact.read = true;
    res.json({ message: 'Contact marked as read' });
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// Delete contact
app.delete('/api/admin/contacts/:id', authenticateToken, (req, res) => {
  const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    contacts.splice(index, 1);
    res.json({ message: 'Contact deleted' });
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// Get projects
app.get('/api/admin/projects', authenticateToken, (req, res) => {
  res.json(projects);
});

// Add/Update project
app.post('/api/admin/projects', authenticateToken, (req, res) => {
  const project = {
    id: req.body.id || Date.now(),
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  const index = projects.findIndex(p => p.id === project.id);
  if (index !== -1) {
    projects[index] = project;
  } else {
    projects.push(project);
  }
  
  res.json(project);
});

// Delete project
app.delete('/api/admin/projects/:id', authenticateToken, (req, res) => {
  const index = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    projects.splice(index, 1);
    res.json({ message: 'Project deleted' });
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

// Upload certificate
app.post('/api/admin/certificates/upload', authenticateToken, upload.single('certificate'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const certificate = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    filename: req.file.filename,
    originalName: req.file.originalname,
    path: req.file.path,
    uploadedAt: new Date().toISOString()
  };
  
  certifications.push(certificate);
  res.json(certificate);
});

// Get certificates
app.get('/api/admin/certificates', authenticateToken, (req, res) => {
  res.json(certifications);
});

// Delete certificate
app.delete('/api/admin/certificates/:id', authenticateToken, (req, res) => {
  const index = certifications.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    const cert = certifications[index];
    // Delete file
    if (fs.existsSync(cert.path)) {
      fs.unlinkSync(cert.path);
    }
    certifications.splice(index, 1);
    res.json({ message: 'Certificate deleted' });
  } else {
    res.status(404).json({ error: 'Certificate not found' });
  }
});

// Dashboard stats
app.get('/api/admin/stats', authenticateToken, (req, res) => {
  const stats = {
    totalContacts: contacts.length,
    unreadContacts: contacts.filter(c => !c.read).length,
    totalProjects: projects.length,
    totalCertificates: certifications.length,
    recentContacts: contacts.slice(0, 5).map(c => ({
      id: c.id,
      name: c.name,
      email: c.email,
      subject: c.subject,
      createdAt: c.createdAt,
      read: c.read
    }))
  };
  
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});