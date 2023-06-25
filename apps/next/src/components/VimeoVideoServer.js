export default function VimeoVideoServer() {
  return (
    <div className="my-10">
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ padding: '56.25% 0 0 0' }}
      >
        <iframe
          title="Sample Video"
          src="https://player.vimeo.com/video/347119375?h=1699409fe2&color=ef2200&byline=0&portrait=0"
          className="absolute top-0 left-0 w-full h-full"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </div>
      <p className="text-sm  mt-3 text-gray-500">
        <a href="https://vimeo.com/347119375">Sample Video</a>
        {' '}
        from
        <a href="https://vimeo.com/sergiosantos5000">Sergio Santos</a>
        {' '}
        on
        <a href="https://vimeo.com">Vimeo</a>
        .
      </p>
    </div>
  );
}
