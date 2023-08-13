import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import ReactStars from 'react-stars';
import IconBtn from '../../common/IconBtn';
import {createRating} from '../../../services/operations/courseDetailsAPI';

const CourseReviewModal = ({setReviwModal}) => {

    const {user} = useSelector((state) => state.profile);
    const {token} = useSelector((state) => state.profile);
    const {courseEntireData} = useSelector((state) => state.auth);

    const {
        register,
        hanndleSubmit,
        setValue,
        formState: {erros},
    } = useForm();

    useEffect(() => {
        setValue("courseExperience", "");
        setValue("courseRating", 0);
    }, [])

    const ratingChanged = (newRating) => {
        setValue("courseRating", newRating);
    }

    const onSubmit = async(data) => {
        await createRating({
            courseId: courseEntireData._id,
            rating: data.courseRating,
            review: data.courseExperience,
        },
        token);
        setReviwModal(false);
    }

  return (
    <div>
      <div>
        {/* Modal header  */}
        <div>
            <p>Add Review</p>
            <button
                onClick={setReviwModal(false)}
            >
                Close
            </button>
        </div>

        {/* Modal body  */}
        <div>
            <div>
                <img
                 src={user?.image} 
                 alt=''
                 className='aspect-square  w-[50px] rounded-full object-cover'
                />
                <div>
                    <p>{user?.firstName} {user?.lastName}</p>
                    <p>Posting Publicly</p>
                </div>
            </div>

            <form action=""
             onSubmit={hanndleSubmit(onSubmit)}
             className='mt-6 flex flex-col items-center'
            >
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />

                <div>
                    <label htmlFor="courseExperience">
                        Add Your Experience <sup className='text-pink-500'>*</sup>
                    </label>
                    <textarea
                     id="courseExperience"
                     placeholder='Add Your Experience here'
                     {...register("courseExperience", {register: true})}
                     className='form-style min-h-[130px] w-full'
                    />
                    {
                        erros.courseExperience && (
                            <span>
                                Please add your experience
                            </span>
                        )
                    }
                </div>

                {/* Cancel and Save button  */}
                <div>
                    <button
                     onClick={() => setReviwModal(false)}
                    >
                        Cancel
                    </button>
                    <IconBtn
                        text="save"
                    />
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CourseReviewModal
