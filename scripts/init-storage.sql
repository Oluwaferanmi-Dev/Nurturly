-- Create resumes storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Enable public access for resumes bucket
CREATE POLICY "Allow public to upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Allow public to read resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes');
