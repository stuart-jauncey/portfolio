import Image from 'next/image';
import classes from './index.module.css';
import { ImageType } from 'app/app/projects/page';

type MediaGalleryProps = {
    content: ImageType[] | null;
};

export default function MediaGallery(props: MediaGalleryProps) {
    if (props.content === null) {
        return null;
    }

    const contents = props.content.map((media) => {
        return (
            <div key={media.title} className={classes.mediaContainer}>
                <h3>{media.title}</h3>
                <div className={classes.imageContainer}>
                    <Image src={media.url} alt="Project Image" width={700} height={380} priority></Image>
                </div>
            </div>
        );
    });

    return <div className={classes.root}>{contents}</div>;
}
