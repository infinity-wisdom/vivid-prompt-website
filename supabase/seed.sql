-- Seed categories + minimal published content for local dev
insert into public.categories (slug, name, description) values
  ('education','Education','Study plans, explanations, revision'),
  ('writing','Writing','Articles, editing, brainstorming'),
  ('coding','Coding','Explain, debug, generate code'),
  ('business','Business','Ideas, plans, research'),
  ('marketing','Marketing','Content plans, social posts'),
  ('research','Research','Questions, comparisons'),
  ('content-creation','Content Creation','Video, scripts, calendars'),
  ('image-generation','Image Generation','Image prompts')
on conflict (slug) do nothing;

-- Example template (study timetable)
insert into public.templates (category_id, title, description, example_use_case, fields, starter_structure, learning_tips, is_published, is_featured)
select c.id, 'Study timetable', 'Create a weekly study plan that fits your subjects and time.',
  'Write a study timetable for final exams',
  '[{"key":"subjects","label":"Subjects","type":"text"},{"key":"hours_per_day","label":"Hours per day","type":"text"},{"key":"tone","label":"Tone","type":"text"}]'::jsonb,
  'Create a weekly study timetable for [subjects]. I can study [hours_per_day] per day. Format as a table with goals per session.',
  'Add constraints (hours) and output format (table) to get a usable plan.',
  true, true
from public.categories c where c.slug='education'
and not exists (select 1 from public.templates where title='Study timetable');

-- Example lesson
insert into public.lessons (category_id, slug, title, concept, body, examples, practice, is_published)
select c.id, 'context-basics', 'Add context to reduce ambiguity', 'context',
  'Context tells the AI who, what and why. Include background, goal and constraints.',
  '[{"weak":"Write something about business.","improved":"Write a 200-word product description for a vegan bakery targeting busy parents. Friendly tone.","explanation":"Added audience, length, tone and goal."}]'::jsonb,
  '{"task":"Rewrite this prompt with context: Write a study plan."}'::jsonb,
  true
from public.categories c where c.slug='education'
and not exists (select 1 from public.lessons where slug='context-basics');
