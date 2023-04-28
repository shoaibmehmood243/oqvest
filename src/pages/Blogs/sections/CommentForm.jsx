import React from 'react';
import styles from '../../../styles/blogDetail.module.css';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { sitting } from '../../../assets';

const CommentForm = () => {
  return (
    <div className='mt-5 mx-auto w-full md:w-11 lg:w-9'>
        <div className={styles.formCard}>
            <h1 className='text-center mt-0'>Leave a Reply</h1>
            <form>
                <div>
                    <label className='mb-2 block'>Comment</label>
                    <InputTextarea className='w-full' rows={5} cols={30} />
                </div>
                <div className='flex align-items-center flex-column lg:flex-row gap-4 my-4'>
                    <div>
                        <label className='mb-2 block'>Name</label>
                        <InputText type='text' />
                    </div>
                    <div>
                        <label className='mb-2 block'>Email</label>
                        <InputText type='email' />
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <button className={`mt-5 ${styles.darkBtn}`}>Post Comment</button>
                </div>
            </form>
            <img className='hidden lg:block' src={sitting} />
        </div>
    </div>
  )
}

export default CommentForm;