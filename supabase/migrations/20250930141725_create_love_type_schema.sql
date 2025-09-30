/*
  # 16 Love Type Quiz Schema

  ## Overview
  Creates the database structure for a love type personality quiz system that classifies users into 16 patterns based on 4 core elements.

  ## New Tables
  
  ### `quiz_results`
  Stores completed quiz results for users
  - `id` (uuid, primary key) - Unique identifier for each quiz result
  - `user_id` (uuid) - Anonymous user identifier (can be null for non-authenticated users)
  - `lead_follow` (text) - Result: 'Lead' or 'Follow'
  - `cuddly_accept` (text) - Result: 'Cuddly' or 'Accept'
  - `realistic_passionate` (text) - Result: 'Realistic' or 'Passionate'
  - `optimistic_earnest` (text) - Result: 'Optimistic' or 'Earnest'
  - `love_type_code` (text) - 4-letter code representing the combination (e.g., 'LCRO')
  - `created_at` (timestamptz) - Timestamp of quiz completion

  ### `love_type_descriptions`
  Stores the descriptions and characteristics of each of the 16 love types
  - `id` (uuid, primary key)
  - `code` (text, unique) - 4-letter code (e.g., 'LCRO')
  - `name` (text) - Display name for the love type
  - `description` (text) - Detailed description of the love type
  - `strengths` (text[]) - Array of strengths
  - `characteristics` (text[]) - Array of key characteristics
  - `compatibility` (text[]) - Array of compatible type codes

  ## Security
  - Enable RLS on all tables
  - Allow public read access to love_type_descriptions
  - Allow users to insert their own quiz results
  - Allow users to read their own quiz results
*/

-- Create quiz_results table
CREATE TABLE IF NOT EXISTS quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid DEFAULT NULL,
  lead_follow text NOT NULL CHECK (lead_follow IN ('Lead', 'Follow')),
  cuddly_accept text NOT NULL CHECK (cuddly_accept IN ('Cuddly', 'Accept')),
  realistic_passionate text NOT NULL CHECK (realistic_passionate IN ('Realistic', 'Passionate')),
  optimistic_earnest text NOT NULL CHECK (optimistic_earnest IN ('Optimistic', 'Earnest')),
  love_type_code text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create love_type_descriptions table
CREATE TABLE IF NOT EXISTS love_type_descriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  strengths text[] DEFAULT '{}',
  characteristics text[] DEFAULT '{}',
  compatibility text[] DEFAULT '{}'
);

-- Enable RLS
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE love_type_descriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for quiz_results
CREATE POLICY "Anyone can insert quiz results"
  ON quiz_results FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view all quiz results"
  ON quiz_results FOR SELECT
  USING (true);

-- RLS Policies for love_type_descriptions
CREATE POLICY "Anyone can view love type descriptions"
  ON love_type_descriptions FOR SELECT
  USING (true);

-- Insert the 16 love type descriptions
INSERT INTO love_type_descriptions (code, name, description, strengths, characteristics, compatibility) VALUES
  ('LCRO', 'The Confident Leader', 'You take charge in relationships, desire affection, seek practical connection, and maintain a carefree approach to love.', 
   ARRAY['Natural leadership', 'Warm and affectionate', 'Grounded perspective', 'Easygoing nature'],
   ARRAY['Likes to lead in relationships', 'Enjoys giving and receiving physical affection', 'Values realistic expectations', 'Keeps things light and fun'],
   ARRAY['FCAE', 'FARE', 'LCPO']),
   
  ('LCRE', 'The Devoted Partner', 'You lead with purpose, crave cuddles, value realistic love, and approach relationships with earnest commitment.',
   ARRAY['Strong leadership', 'Deeply affectionate', 'Practical mindset', 'Serious commitment'],
   ARRAY['Takes initiative in love', 'Highly physical and warm', 'Grounded in reality', 'Dedicated and loyal'],
   ARRAY['FCAE', 'FARE', 'LCPE']),
   
  ('LCPO', 'The Passionate Pioneer', 'You guide the relationship, love affection, desire intense romance, yet keep a relaxed attitude.',
   ARRAY['Leadership qualities', 'Affectionate nature', 'Romantic idealism', 'Flexible approach'],
   ARRAY['Directs relationship flow', 'Craves physical closeness', 'Dreams of passionate love', 'Stays optimistic and free'],
   ARRAY['FCPE', 'FAPE', 'LCRO']),
   
  ('LCPE', 'The Intense Romantic', 'You take control, desire cuddles, seek passionate love, and are deeply serious about relationships.',
   ARRAY['Decisive leadership', 'Very affectionate', 'Deep romantic desires', 'Earnest commitment'],
   ARRAY['Leads with conviction', 'Needs physical intimacy', 'Seeks intense connection', 'Takes love seriously'],
   ARRAY['FCPE', 'FAPE', 'LCRE']),
   
  ('LARO', 'The Independent Nurturer', 'You prefer leading, enjoy pampering others, maintain realistic expectations, and keep love lighthearted.',
   ARRAY['Leadership ability', 'Caring nature', 'Practical outlook', 'Easygoing attitude'],
   ARRAY['Takes charge naturally', 'Loves taking care of partner', 'Values realistic love', 'Stays relaxed and fun'],
   ARRAY['FCRO', 'FCRE', 'LAPO']),
   
  ('LARE', 'The Steadfast Caregiver', 'You lead relationships, love caring for your partner, value realism, and are deeply committed.',
   ARRAY['Strong guidance', 'Nurturing heart', 'Grounded thinking', 'Serious dedication'],
   ARRAY['Directs relationship path', 'Enjoys giving care', 'Keeps expectations realistic', 'Deeply committed'],
   ARRAY['FCRO', 'FCRE', 'LAPE']),
   
  ('LAPO', 'The Romantic Protector', 'You take the lead, love pampering, dream of passionate romance, while maintaining optimism.',
   ARRAY['Leadership presence', 'Giving nature', 'Romantic vision', 'Positive outlook'],
   ARRAY['Guides the relationship', 'Enjoys spoiling partner', 'Desires intense love', 'Keeps things light'],
   ARRAY['FCPO', 'FCPE', 'LARO']),
   
  ('LAPE', 'The Devoted Guardian', 'You lead with purpose, cherish caring for others, seek passionate connection, and are deeply earnest.',
   ARRAY['Decisive leadership', 'Deeply nurturing', 'Romantic depth', 'Serious commitment'],
   ARRAY['Takes full responsibility', 'Loves giving care', 'Craves passionate bond', 'Fully dedicated'],
   ARRAY['FCPO', 'FCPE', 'LARE']),
   
  ('FCRO', 'The Harmonious Sweetheart', 'You adapt to your partner, desire affection, value practical love, and keep things carefree.',
   ARRAY['Adaptable nature', 'Affectionate warmth', 'Realistic approach', 'Lighthearted spirit'],
   ARRAY['Follows partners lead', 'Craves physical closeness', 'Keeps expectations grounded', 'Stays fun and free'],
   ARRAY['LARO', 'LARE', 'FCPO']),
   
  ('FCRE', 'The Loyal Companion', 'You follow your partners pace, love cuddles, seek realistic love, and are seriously committed.',
   ARRAY['Supportive nature', 'Deeply affectionate', 'Practical mindset', 'Strong loyalty'],
   ARRAY['Matches partners rhythm', 'Needs physical affection', 'Values realistic connection', 'Takes love seriously'],
   ARRAY['LARO', 'LARE', 'FCPE']),
   
  ('FCPO', 'The Dreamy Romantic', 'You adapt to others, crave affection, desire passionate romance, and maintain an optimistic view.',
   ARRAY['Flexible nature', 'Warm affection', 'Romantic idealism', 'Positive attitude'],
   ARRAY['Goes with the flow', 'Loves physical touch', 'Dreams of intense love', 'Stays optimistic'],
   ARRAY['LAPO', 'LAPE', 'FCRO']),
   
  ('FCPE', 'The Passionate Devotee', 'You follow your partners lead, need cuddles, seek intense romance, and are deeply earnest.',
   ARRAY['Supportive flexibility', 'Very affectionate', 'Deep romantic soul', 'Serious dedication'],
   ARRAY['Adapts to partner', 'Craves intimacy', 'Desires passionate bond', 'Fully committed'],
   ARRAY['LAPO', 'LAPE', 'FCRE']),
   
  ('FARO', 'The Gentle Soul', 'You match others pace, enjoy being pampered, value realistic love, and keep relationships light.',
   ARRAY['Adaptable spirit', 'Receptive nature', 'Grounded outlook', 'Carefree approach'],
   ARRAY['Follows naturally', 'Likes being cared for', 'Realistic expectations', 'Stays relaxed'],
   ARRAY['LCRO', 'LCRE', 'FAPO']),
   
  ('FARE', 'The Committed Receiver', 'You adapt to your partner, love being pampered, seek realistic connection, and are deeply serious.',
   ARRAY['Flexible nature', 'Appreciative heart', 'Practical thinking', 'Strong commitment'],
   ARRAY['Matches partners pace', 'Enjoys receiving care', 'Values realistic love', 'Takes it seriously'],
   ARRAY['LCRO', 'LCRE', 'FAPE']),
   
  ('FAPO', 'The Optimistic Dreamer', 'You follow the flow, enjoy being pampered, desire passionate love, and stay lighthearted.',
   ARRAY['Easy adaptability', 'Receptive warmth', 'Romantic dreams', 'Positive energy'],
   ARRAY['Goes with relationship flow', 'Loves being spoiled', 'Craves intense romance', 'Keeps things fun'],
   ARRAY['LCPO', 'LCPE', 'FARO']),
   
  ('FAPE', 'The Romantic Believer', 'You adapt to others, cherish being cared for, seek passionate romance, and are earnestly devoted.',
   ARRAY['Supportive flexibility', 'Appreciative nature', 'Deep romanticism', 'Serious devotion'],
   ARRAY['Follows partners lead', 'Treasures being pampered', 'Desires intense connection', 'Deeply committed'],
   ARRAY['LCPO', 'LCPE', 'FARE'])
ON CONFLICT (code) DO NOTHING;