import React, { useEffect, useState } from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import { blog4 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';
import { Tooltip } from 'primereact/tooltip';

const BlogDetail4 = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className={styles.container}>
            <div className='grid'>
                <div className='col-12 lg:col-9 pr-0 md:pr-5'>
                    <h2>Article</h2>
                    <div className={styles.blogImage}>
                        <img src={blog4} />
                    </div>
                    <div className='grid mt-5'>
                        <div className='col-6'>
                            <div className={styles.read}>
                                <RiFireFill /> Most Read
                            </div>
                        </div>
                        <div className='col-6 text-end'>
                            <div className='flex align-items-center justify-content-end gap-3 md:gap-4 pr-1 md:pr-5'>
                                <span className={styles.red}>
                                    <AiFillHeart /> 31
                                </span>
                                <span className={styles.blue}>
                                    <TbMessageCircle2Filled /> 18
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='grid align-items-center pr-2 md:pr-5'>
                        <div className='col-12 md:col-8'>
                            <h1>How To Finance An Airbnb Rental: A Guide For Investors
                            </h1>
                        </div>
                        <div className='col-12 md:col-4 text-right'>
                            <Tooltip content={copied ? 'Copied' : 'Copy to clipboard'} target=".sharebtn" />
                            <div data-pr-position="top" onClick={copyToClipboard} style={{ cursor: 'pointer' }} className={`sharebtn ${styles.shareBtn}`}>
                                <BsShare /> Share Now
                            </div>
                        </div>
                    </div>
                    <span className='mb-1'><strong>Posted on:</strong>  January, 2021</span>
                    <span className='mb-3'><strong>Reading time:</strong> 13 Minutes</span>
                    <div className='pr-5'>
                        <p>Investing in an Airbnb rental property can be a smart move for many real estate investors. However, financing an Airbnb property can be a little more complicated than financing a traditional rental property. That's where Oqvest, a trusted mortgage broker, can help. In this guide, we'll explore the steps you need to take to finance an Airbnb rental property.</p>
                        <h2>Step 1: Understand The Financing Options Available</h2>
                        <p>Before you start searching for an Airbnb rental property, it's important to understand the financing options available to you. Oqvest can help you evaluate your options and find the best financing solution for your unique situation. Here are a few financing options to consider:</p>
                        <ul>
                            <li>Conventional Loans: Conventional loans are a popular financing option for Airbnb rental properties. With a conventional loan, you can finance up to 80% of the property's value.</li>
                            <li>FHA Loans: If you plan to live in the property and rent out a portion of it on Airbnb, you may be able to qualify for an FHA loan. With an FHA loan, you can finance up to 96.5% of the property's value. </li>
                            <li>Private Lenders: Private lenders can be a good option for investors who don't qualify for traditional financing. Private lenders typically offer shorter loan terms and higher interest rates than conventional lenders.</li>
                        </ul>
                        <h2>Step 2: Determine The Property's Potential Rental Income</h2>
                        <p>Before you apply for financing, it's important to determine the property's potential rental income. Oqvest can help you evaluate the property's potential rental income and factor it into your financing decision. Here are a few things to consider when determining the property's potential rental income:</p>
                        <ul>
                            <li>Location: Properties located in popular Airbnb destinations are likely to generate higher rental income.</li>
                            <li>Occupancy Rates: Look at the property's historical occupancy rates to determine how often it's likely to be rented out.</li>
                            <li>Amenities: Properties with desirable amenities, such as a pool or hot tub, are likely to generate higher rental income.</li>
                        </ul>
                        <h2>Step 4: Close On The Property</h2>
                        <p>Once you're pre-approved for financing, it's time to close on the property. Oqvest can help you navigate the closing process and ensure that everything goes smoothly. Here are a few things to keep in mind:</p>
                        <ul>
                            <li>Appraisal: The property will need to be appraised to determine its value.</li>
                            <li>Title Search: A title search will be conducted to ensure that there are no liens or other issues with the property's title.</li>
                            <li>Closing Costs: You'll need to pay closing costs, which typically range from 2% to 5% of the property's purchase price.</li>
                        </ul>
                        <h2>Step 5: Start Generating Rental Income</h2>
                        <p>Once your loan application is approved, you'll need to sign the closing documents and provide your down payment. After closing, you'll officially own your Airbnb rental property and can start earning income. At Oqvest, we provide ongoing support to our clients to ensure their investment is successful.</p>
                        <h2>Conclusion</h2>
                        <p>Financing an Airbnb rental property can be a great way to generate passive income and build wealth. However, it's important to understand the unique financing requirements for this type of investment. At Oqvest, we specialize in helping investors finance their Airbnb rentals and achieve their financial goals. If you're interested in financing an Airbnb rental, contact us today to learn more about our services.</p>
                    </div>
                </div>
                <div className='col-12 lg:col-3'>
                    <h2 className='text-center md:text-left'>Featured Articles</h2>
                    <BlogSection id={4} />
                </div>
            </div>
            <CommentForm />
        </div>
    )
}

export default BlogDetail4;