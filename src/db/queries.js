import postgres from "postgres";

let sql = postgres(process.env.DATABASE_URL);

export async function getJobs() {
  let jobs = await sql`
    SELECT
      jobs.id as id,
      jobs.title as title,
      jobs.description as description,
      jobs.salary as salary,
      jobs.employment_type as type,
      jobs.posted_date as post_date,
      jobs.is_open as is_open,
      jobs.requirements as requirements,
      jobs.benefits as benefits,
      users.full_name as employer,
      users.profile_piture as employer_avatar,
      users.website as employer_website,
      users.socials as employer_social,
      cities.name as city,
      countries.name as country
    FROM 
      jobs, users, cities, countries
    WHERE 
      jobs.employer_id = users.id
      AND
      jobs.location = cities.id
      AND
      cities.country = countries.id
    `;

  return jobs;
}