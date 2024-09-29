import Image from 'next/image';
import classes from './index.module.css';
import { ImageType } from 'app/app/projects/page';

type MediaGalleryProps = {
    content: ImageType | null;
};

export default function MediaGallery(props: MediaGalleryProps) {
    if (props.content === null) {
        return null;
    }

    return (
        <div className={classes.mediaGallery}>
            <h3>{props.content.title}</h3>
            <div className={classes.imageContainer}>
                <Image
                    src={props.content.url}
                    alt="Project Image"
                    fill
                    sizes="100%"
                    priority
                ></Image>
            </div>
        </div>
    );
}
