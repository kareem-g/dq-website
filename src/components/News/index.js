import clsx from "clsx";
import { useState } from "react";
import BrandLogo from "../BrandLogo";
import PlayButton from "../PlayVideoBtn";
import Link from '@docusaurus/Link';
import Button from "../Button";
import Translate from "@docusaurus/Translate";

// SafetyWork component
export default function News({title, description, withoutAutoPlay, withPlay, youtubeVideoBanner, isVideo, imageBanner, blogLink }) {

    const [value, setValue] = useState(null);
    let button = <Translate>general.readmore</Translate>

    return (<section className="news-section">
        <div className="card">
            <div className="videosection">
                {isVideo ? <>
                    {value ? "" : <BrandLogo Img={youtubeVideoBanner} width={''} height={''} alt={''}/>}
                    <iframe
                        src={value ? withPlay : withoutAutoPlay}
                        title="Understanding DigiQuip"
                        referrerPolicy="strict-origin-when-cross-origin w-100"
                    ></iframe>
                    {value ? ("") : (<PlayButton onClick={() => setValue("play")}/>)}
                </> : <>
                <Link href={blogLink}>
                    <BrandLogo Img={imageBanner} width={''} height={''} alt={''}/>
                </Link>
                </>}
            </div>
            <div className="news-section-detail">
                <h3 className="news-title">
                    <Link href={blogLink}>
                            {title}
                            <span className="orange">.</span>
                    </Link>
                </h3>
                <p className="news-detail"><small>{description}</small></p>
                    {/*<Link className="btn red-btn read-more" href={blogLink}>Read More</Link>*/}
                <Button label={button} isIcon={true} link={blogLink} btnType={'dark'} btnSize={'sm'} />
            </div>
        </div>
    </section>);
}
