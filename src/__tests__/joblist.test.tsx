import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import JobsList from '../components/JobsList/JobsList';
import { JobsProvider } from "../context/jobs-context";
import { SavedProvider } from "../context/saved-context";

test('renders job postings', async () => {
  render(
  <JobsProvider>
    <SavedProvider>
    <JobsList/>
    </SavedProvider>
  </JobsProvider>
  );
  await waitFor(() => {
    expect(screen.getByRole('button')).toBe(true)
  })
  const element = screen.getByText("1 day ago");
  expect(element).toBeInTheDocument();
});
