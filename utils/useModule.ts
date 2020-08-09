import useSWR from 'swr';
import { Module } from '../interfaces/module';
import { ModuleData } from '../interfaces/module-data';

const token = Buffer.from(
  `vihanchaudhry:${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
).toString('base64');

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + token,
    },
  }).then(r => r.json());

export function useModule(repository: string): ModuleData {
  const { data, error } = useSWR(
    `https://api.github.com/repos/${repository}`,
    fetcher
  );

  return {
    module: {
      id: data?.id,
      name: data?.name,
      full_name: data?.full_name,
      html_url: data?.html_url,
      description: data?.description,
      homepage: data?.homepage,
      license: data?.license?.spdx_id,
      stars_count: data?.stargazers_count,
      forks_count: data?.forks_count,
      open_issues_count: data?.open_issues_count,
      watchers_count: data?.subscribers_count,
    } as Module,
    isLoading: !error && !data,
    isError: error,
  };
}
