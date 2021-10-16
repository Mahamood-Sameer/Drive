import React from 'react'
import './ContentPage.css'
import ContentPageHeader from './ContentPageHeader'
import DocCards from './DocCards'
import image1 from '../Images/image1.jpg'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import image2 from '../Images/image2.jpg'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.jpg';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { useParams } from 'react-router'
import Storage from './Storage'
import ImageOutlined from '@mui/icons-material/ImageOutlined'


function ContentPage() {
    let section = useParams();
    console.log(section)
    return (

        section.section === 'Storage' ?
            <div className="contentpage">
                <ContentPageHeader title={section.section}/>
                <Storage Icon={MovieCreationOutlinedIcon} title='Class.mp4' storage="12MB" />
                <Storage Icon={ImageOutlined} title='Nature.jpg' storage="250KB" />
                <Storage Icon={PictureAsPdfOutlinedIcon} title='Resume.pdf' storage="2MB" />
                <Storage Icon={ImageOutlined} title='Graph.jpg' storage="550KB" />
                <Storage Icon={ImageOutlined} title='Nature.jpg' storage="250KB" />
                <Storage Icon={ImageOutlined} title='Graph.jpg' storage="550KB" />
                <Storage Icon={MovieCreationOutlinedIcon} title='Class.mp4' storage="12MB" />
                <Storage Icon={PictureAsPdfOutlinedIcon} title='Resume.pdf' storage="2MB" />
            </div>
            :
            <div className="contentpage">
                <ContentPageHeader title={section.section} />
                <strong className="contentpage__sideheading">Suggested</strong>
                <div className="contentpage__cards">
                    <DocCards image={image1} title="Nature.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image4} title="Class.mp4" Icon={MovieCreationOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image3} title="Graph.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image4} title="Class.mp4" Icon={MovieCreationOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image3} title="Graph.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image1} title="Nature.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image1} title="Nature.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image3} title="Graph.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image4} title="Class.mp4" Icon={MovieCreationOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image1} title="Nature.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image1} title="Nature.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image3} title="Graph.jpg" Icon={ImageOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                    <DocCards image={image2} title="Resume.pdf" Icon={PictureAsPdfOutlinedIcon} />
                </div>
            </div>
    )
}

export default ContentPage
