import React, { useEffect, useState } from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import { blog3 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';
import { Tooltip } from 'primereact/tooltip';

const BlogDetail3 = () => {
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
            <img src={blog3} />
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
              <h1>Buying An Investment Property: 3 Signs You’re Ready And What You Need To Know
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
            <p>Investing in real estate can be an exciting way to earn passive income and increase your net worth, but it’s essential to know whether you’re ready to become a landlord. Oqvest, a mortgage broker, can help you navigate the buying process, but before you invest in property, make sure you meet the following qualifications</p>
            <h5>1. You’re Financially Stable</h5>
            <p>Investment properties require a much higher financial stability level than primary homes, especially if you plan to rent the home to tenants. Most mortgage lenders require borrowers to have at least a 15% down payment for investment properties, which is usually not required when you buy your first home. In addition to a higher down payment, investment property owners who move tenants in must also have their homes cleared by inspectors in many states.</p>
            <p>Make sure you have enough money in your budget to cover the initial home purchase costs (like your down payment, inspection, and closing costs) as well as ongoing maintenance and repairs. As a landlord or rental property owner, you must complete essential repairs in a timely manner, which can mean expensive emergency plumbing and HVAC repairs. Some states allow tenants to withhold their rent payments if you don’t fix broken home utilities on time.</p>
            <p>Make sure you budget more money than you think you need for regular and emergency home repairs. Investment property expenses don’t just begin when tenants move in or when you assume responsibility for the property’s current residents. You also need to budget money for advertising and credit checks to make sure you take in the best tenants possible. A great set of tenants is an asset for your property, while bad tenants can increase your expenses dramatically.</p>
            <h5>2. The Return On Investment (ROI) Is There</h5>
            <p>Real estate investors often see positive cash flow with their investment properties in today’s market, but the savviest investors calculate their approximate return on investment (ROI) rates before they purchase a property. To calculate your ROI on potential property investments, follow these steps.</p>
            <ul>
              <li>Estimate your annual rental income. Search for similar properties that are currently up for rent. Find an average monthly rent for the type of property that you’re interested in and multiply that rent price by 12 for a year’s worth of income. Calculate your net operating income.</li>
              <li>Calculate your net operating income. After you estimate your annual potential rental income, calculate your net operating income. Your net operating income is equal to your annual rental estimate minus your annual operating expenses. Your operating expenses are the total amount of money that it takes to maintain your property every year. Some expenses include insurance, property taxes, maintenance and homeowners association Do not include your mortgage or interest in your net operating expense calculation. Subtract your operating expenses from your annual rent estimation to find your net operating income.</li>
              <li>Find your ROI. Next, divide your net operating income by the total value of your mortgage to find your total return on investment (ROI).</li>
            </ul>
            <p>For example, let’s say you buy a property worth $200,000 that you can rent out for $1,000 a month. Your total potential income is $1,000 × 12 months for a total of $12,000. Let’s also assume that the property costs about $500 a month in maintenance fees and taxes.</p>
            <p>If you buy a property in a solid area and you know that you can rent to reliable tenants, a 3% ROI is great. However, if the property is in an area known for short-term tenants, a 3% ROI may not be worth your time and effort.</p>
            <h5>3. You Have Time To Manage It</h5>
            <p>Managing an investment property can be a time-consuming task that requires careful attention to detail. You'll need to advertise your property, screen potential tenants, perform regular maintenance and repairs, and ensure that your tenants are paying rent on time. Additionally, you must respect your tenants' right to privacy and provide them with 24 hours' notice before entering the property in most states.</p>
            <h5>Final Thoughts</h5>
            <p>Investing in real estate can be a great way to earn passive income and increase your net worth, but it's important to consider if you're ready to become a landlord. Before investing in a property, make sure you're financially stable and have enough money to cover initial and ongoing expenses. It's also important to calculate your potential ROI to ensure it's worth the investment. Finally, managing an investment property can be time-consuming, so make sure you have enough time to dedicate to it. By considering these factors, you can make a well-informed decision about whether investing in real estate is right for you.</p>
          </div>
        </div>
        <div className='col-12 lg:col-3'>
          <h2 className='text-center md:text-left'>Featured Articles</h2>
          <BlogSection id={3} />
        </div>
      </div>
      {/* <CommentForm /> */}
    </div>
  )
}

export default BlogDetail3;