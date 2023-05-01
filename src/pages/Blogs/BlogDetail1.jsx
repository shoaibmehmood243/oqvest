import React, { useEffect, useState } from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import { blog1 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';
import { Tooltip } from 'primereact/tooltip';

const BlogDetail1 = () => {
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
            <img src={blog1} />
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
                {/* <span className={styles.blue}>
                  <TbMessageCircle2Filled /> 18
                </span> */}
              </div>
            </div>
          </div>
          <div className='grid align-items-center pr-2 md:pr-5'>
            <div className='col-12 md:col-8'>
              <h1>A Guide to First-Time Home
                Buyer Programs, Loans & Grants
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
            <h5>Types of First-Time Home Buyer Programs</h5>
            <p>As a first-time home buyer, you may be intimidated by the process of purchasing a home, but Oqvest is here to help. One of the biggest hurdles to homeownership is saving enough for a down payment, but there are several first-time home buyer programs that can help. These programs can provide down payment assistance, government-backed loans, tax deductions, closing cost assistance, and homebuyer education. Let's take a closer look at some of these programs.</p>
            <h5>Down Payment Assistance (DPA)</h5>
            <p>A down payment is a substantial upfront cost when purchasing a home, and it's required for most types of mortgages. Fortunately, many lenders accept down payment assistance, which can help you cover the upfront costs of a down payment. Down payment assistance programs are typically grants or low- to no-interest loans, and many are exclusive to first-time buyers. The specific assistance programs you qualify for can impact how you can use your funds and whether you'll need to pay them back.</p>
            <p>DPA Loans If you're unsure about being able to cover a down payment on your own, you may also be eligible for down payment assistance programs through specific types of loans to reduce the amount you have to put down. A few options include second mortgages, deferred payment loans, and forgiven loans.</p>
            <p> Loans structured as a second mortgage must be paid off at the same time as your main mortgage, while deferred payment loans must be paid in full when you move, sell, refinance or pay off your main mortgage. Loans can also be forgiven over a set number of years – but will need to be repaid when you move, sell, refinance or pay off your main mortgage if you move before that set number of years expires or otherwise violate the terms of forgiveness.</p>
            <h5>DPA Grants</h5>
            <p>You may be able to get DPA through grants, which don't have to be repaid. Program requirements for loans and grants may vary, so it's best to check with your local or state government for details on any first-time buyer down payment assistance programs.</p>
            <h5>Government-Backed Loans</h5>
            <p>A loan backed by the federal government can also help qualified first-time home buyers purchase with no down payment. There are currently three government-backed loan options: FHA loans, USDA loans, and VA loans. Each program has its qualifications.</p>
            <h5>Tax Deductions</h5>
            <p>Although the Housing and Economic Recovery Act's $7,500 credit for first-time home buyers ended in 2010, you can still save money on your taxes through various deductions. Federal and state deductions can lower your taxable income.</p>
            <p>For example, you can deduct the full amount of your mortgage insurance costs for a primary and one vacation home from your federal taxes if your mortgage is worth less than $750,000 ($375,000 if married filing separately). This deduction has currently been extended through the 2021 tax year. You can also deduct the cost of interest paid during the year on loan amounts up to the above limits for a primary and one second home.</p>
            <h5>Closing Assistance</h5>
            <p>Like down payment assistance, there are government-sponsored and private programs that can help you pay closing costs. Closing costs are additional fees you pay at the end of the mortgage process, typically 3 – 6% of the total cost of your home loan. Like down payment assistance, closing cost assistance can come through a grant or loan. You can also look to your seller for help with closing costs, with seller concessions.</p>
            <h2>Federal First-Time Home Buyer Programs</h2>
            <p>You can take advantage of federal, state and local government programs when you buy a home. Federal programs are open to anyone who’s a citizen or legal resident of the U.S. Though not everyone qualifies for every program, you don’t need to live in a specific state to get federal assistance. Here are some of the most popular federal programs for first-time home buyers.</p>
            <h5>Government-Backed Loans</h5>
            <p>Government-backed loans can allow you to get a home with a low down payment or poor credit. The government insures government-backed loans, meaning they pose less of a risk to a lender.</p>
            <p>This also means that lenders can offer borrowers a lower interest rate. There are currently three government-backed loan options: FHA loans, USDA loans and VA loans. Each program has its own list of qualifications. </p>
            <h5>Good Neighbor Next Door</h5>
            <p>Are you a pre-K – 12 teacher, emergency medical technician, firefighter or law enforcement officer? You can take advantage of the Good Neighbor Next Door program sponsored by the Department of Housing and Urban Development (HUD).</p>
            <p>The Good Neighbor Next Door program offers a generous 50% off select HUD properties. The properties available are foreclosures and are very affordable, even without the discount. You can view a list of available properties on the HUD program website.</p>
            <h5>HomePath® Ready Buyer™ Program</h5>
            <p>Fannie Mae offers first-time home buyers the chance to buy a foreclosed property for as little as 3% down with their HomePath® program. You can even apply for up to 3% of your closing costs back through the program as well. Fannie Mae homes sell in as-is condition, so you may have to repair a few things before your new place is move-in ready. However, closing cost assistance can help make it more possible to cover these expenses.</p>
            <p>The HomePath® Ready Buyer™ program is only available to first-time buyers who want to live full-time in a house that they’re looking to purchase. You'll need to take and pass Fannie’s Framework Homeownership course before you close.</p>
            <h2>State & Local First-Time Home Buyer Programs</h2>
            <p>Most government home buying assistance comes through state and local programs. Individual programs vary depending on location. You can view a complete list of state-specific buying resources on the HUD website.</p>
            <h2>Charitable Or Nonprofit First-Time Home Buyer Programs</h2>
            <p>You might qualify for charitable or nonprofit assistance if you have low to moderate income. Charities and nonprofits are non-government organizations that can offer you educational and financial resources when you buy a home. Nonprofits usually have income qualifications that dictate who can get help.</p>
            <h5>Habitat For Humanity</h5>
            <p>One of the most well-known housing nonprofits is Habitat for Humanity, an international organization that offers “simple, decent and affordable” housing for low-income families. Volunteers build homes for those in need, and Habitat for Humanity makes no profit on the home after you close. This makes their homes much more affordable than local options. Habitat for Humanity is the largest nonprofit builder in the world, with over 800,000 homes built.</p>
            <h5>Neighborhood Assistance Corporation Of America (NACA)</h5>
            <p>The Neighborhood Assistance Corporation of America (NACA) is another nationwide nonprofit that can help you buy a home. NACA offers “financially unstable” households mortgage counseling and education. NACA’s team members also help low-income families find lenders willing to work with them.</p>
            <p>NACA loans have no down payment requirement or closing costs and no minimum credit score and can give you a more personalized look at potential paths to homeownership.</p>
            <p>Like government programs, many charities and nonprofits are region-specific. HUD keeps a running list of approved nonprofits available in every state and county. You can learn more about local housing programs available to you by visiting HUD’s website.</p>
            <h2>Employer-Sponsored First-Time Home Buyer Programs</h2>
            <p> Did you know that your employer can help contribute to your home purchase? Some employers are now adopting housing incentives to help employees cover down payments and closing costs. Your employer may give you a grant or a loan that’s forgivable over time, and your labor union might also offer closing assistance.</p>
            <p>The employer-sponsored programs that you can use depend upon what your employer offers. Not every employer offers housing or closing assistance, and employer-assisted housing programs are usually joint efforts between state governments and employers.</p>
            <p>Set up a meeting with your manager or HR representative and ask if your workplace offers any kind of down payment or closing cost assistance.</p>
            <h2>First-Time Home Buyer Loans And Grants For Students</h2>
            <p>If you’re looking into buying property as a student, keep in mind that your school loans may make getting a mortgage a bit more difficult, but the same first-time buyer programs should apply.</p>
            <p>FHA and VA loans, for example, are great options for current students or recent graduates who want to balance their student loan repayments with a mortgage. Flexible DTI requirements make it easier to qualify with a student loan balance, and a low minimum down payment can make the upfront costs of homeownership more manageable for students who want to move out of their parents’ house but haven’t had enough time to stockpile their savings.</p>
            <p>Some states also provide first-time homeowner assistance specifically for student loan borrowers. Home buyers who have a qualifying amount of student loans or have graduated recently could qualify for programs that reduce their mortgage rate, provide down payment assistance or offer specialty loans. Check your state website or consult a real estate professional to see what options are available to you.</p>
            <div className='text-center'>
              <h2 className='mb-0'>First-Time Home Buyer Program FAQs</h2>
              <p className='mt-0'>Let’s take a moment to answer a couple of your biggest questions.</p>
            </div>
            <h5>What is a first-time home buyer?</h5>
            <p>Most government and nonprofit programs have a strict definition of a first-time home buyer. However, the term can be a bit misleading. Generally speaking, you’re considered a first-time home buyer if you haven’t had any form of ownership in any home in the last 3 years.</p>
            <p>This means that, even if you have owned a home at some point in the past, you may still be eligible to participate in some first-time home buyer programs, provided it has been at least 3 years since you’ve owned a home and that you meet the other qualifying criteria.</p>
            <h5>Who qualifies for first-time home buyer programs?</h5>
            <p>You can’t get first-time homeowner benefits if you own a rental or investment property, even if you don’t live in it.</p>
            <p>If you opt for a government-backed loan like a USDA loan, VA loan or an FHA loan, note that your home also has to meet certain higher safety standards before you qualify. Local and state government programs also tend to have income restrictions.</p>
            <p>Tax deductions and employer-sponsored programs are often more flexible. You can deduct your mortgage insurance on your personal home even if you have other properties – up to the limits mentioned earlier.</p>
            <p>Employer-sponsored programs are entirely up to the discretion of the employer and state sponsor if there is one. Many state-employer partnership programs also use the previously mentioned 3-year rule for deciding who is and who is not considered a first-time home buyer.</p>
            <p>Some buyers believe that they might not qualify for first-time buyer programs. If you aren’t sure whether you qualify, the best thing to do is talk to a Home Loan Expert at Rocket Mortgage. They can take a look at your unique situation and point you in the right direction.</p>
          </div>
        </div>
        <div className='col-12 lg:col-3'>
          <h2 className='text-center md:text-left'>Featured Articles</h2>
          <BlogSection id={1} />
        </div>
      </div>
      {/* <CommentForm /> */}
    </div>
  )
}

export default BlogDetail1;