const iconPaths = {
  shield: <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m10.8 6.8-4.6 9.4m7-9.4 4.6 9.4M7 18h10" /></>,
  brain: <><path d="M12 5a3 3 0 0 0-5.8 1.1A3.4 3.4 0 0 0 5 12a3.5 3.5 0 0 0 2.7 5.7A3.3 3.3 0 0 0 12 20V5Zm0 0a3 3 0 0 1 5.8 1.1A3.4 3.4 0 0 1 19 12a3.5 3.5 0 0 1-2.7 5.7A3.3 3.3 0 0 1 12 20V5Z" /><path d="M8 10h1m6 4h1m-6 2h1m2-8h1" /></>,
  code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" /></>,
};

function FocusIcon({ name }) {
  return (
    <svg className="focus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name] || iconPaths.code}
    </svg>
  );
}

export default FocusIcon;
