export function YouTube({
  id,
  title = 'YouTube video',
  start,
}: {
  id: string;
  title?: string;
  start?: number;
}) {
  const src = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
  if (start) src.searchParams.set('start', String(start));

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg border bg-fd-muted">
      <iframe
        src={src.toString()}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="size-full"
      />
    </div>
  );
}
