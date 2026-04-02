-- Email Inquiries Table (for Coming Soon page)
CREATE TABLE IF NOT EXISTS email_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT contacts_email_unique UNIQUE(email, created_at)
);

-- Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  position VARCHAR(255) NOT NULL,
  resume_url TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT career_apps_email_position_unique UNIQUE(email, position)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_career_apps_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_apps_position ON career_applications(position);
CREATE INDEX IF NOT EXISTS idx_career_apps_created_at ON career_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_email_inquiries_email ON email_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_email_inquiries_created_at ON email_inquiries(created_at);

-- Enable RLS
ALTER TABLE email_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow public to insert
CREATE POLICY "Allow public insert" ON email_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON career_applications FOR INSERT WITH CHECK (true);

-- RLS Policies - Only allow authenticated users to view/delete
CREATE POLICY "Allow authenticated select" ON email_inquiries FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated select" ON contacts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated select" ON career_applications FOR SELECT USING (auth.role() = 'authenticated');
