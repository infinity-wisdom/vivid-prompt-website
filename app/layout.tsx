import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vivid Prompt',
  description:
    'Learn to write clearer AI prompts: templates, guided builder, coach, library.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          margin: 0,
          background: '#fafafa',
          color: '#111',
        }}
      >
        <header
          style={{ borderBottom: '1px solid #e5e5e5', background: '#fff' }}
        >
          <nav
            style={{
              display: 'flex',
              gap: 16,
              padding: '12px 20px',
              maxWidth: 960,
              margin: '0 auto',
            }}
          >
            <a href="/">Vivid Prompt</a>
            <a href="/explore">Explore</a>
            <a href="/builder">Builder</a>
            <a href="/coach">Coach</a>
            <a href="/learn">Learn</a>
            <a href="/library">Library</a>
          </nav>
        </header>
        <main style={{ maxWidth: 960, margin: '0 auto', padding: 20 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
