-- Tulipa - tabela de clientes interessados em cursos
-- Rode no Supabase Dashboard > SQL Editor > New query > Run

create table if not exists public.interessados (
  id uuid primary key,
  nome text not null,
  email text default '',
  telefone text default '',
  cursos text[] default '{}',
  status text default 'Interessado',
  observacao text default '',
  criado_em timestamptz not null default now()
);

alter table public.interessados enable row level security;

drop policy if exists "interessados_all_anon" on public.interessados;
create policy "interessados_all_anon" on public.interessados
  for all to anon using (true) with check (true);
