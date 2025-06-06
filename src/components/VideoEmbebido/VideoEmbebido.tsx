import './VideoEmbebido.css';


export const VideoEmbebido: React.FC = () => {
    return (
        <section className='container-video-electrico'>
            <h1 className='text-center py-2'>Circuitos Eléctricos</h1>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kHZ8SD7jiiA?si=2MAAq5cZHQ0Knju-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{

                    width: '100%',

                }}
            />


        </section>
    )
}