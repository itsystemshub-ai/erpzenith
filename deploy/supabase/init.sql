-- Supabase Database Setup
-- ERP ZENITH - Database Schema

-- Enable Prisma compatibility
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Create schema if not exists
CREATE SCHEMA IF NOT EXISTS public;

-- Note: Tables will be created by Prisma Migrate or Prisma DB Push
-- Run from local: cd apps/backend && npx prisma db push

-- Optional: Create initial data
-- Run from local: cd apps/backend && npm run db:seed
