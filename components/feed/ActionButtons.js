// import { useAppContext } from '../../context/context'

import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { FaRegComment, FaEdit } from 'react-icons/fa'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine, RiDislikeFill } from 'react-icons/ri'
import { useGlobalState } from "../../hooks";

const style = {
    wrapper: `flex`,
    icon: `m-2`,
    tipIcon: `flex align-center cursor-pointer mr-[1rem] mt-[10px]`,
}

const ActionButtons = ({ owner, postId, toggleEditPostModal, }) => {
    //   const { tipOwner } = useAppContext()


    const staticLikePost = (owner, postId, wallet = "1111111111") => {
        console.log(`Liking post from: ${owner} with Id: ${postId} and userKey: ${wallet}`)
    }

    const staticDislikePost = (owner, postId, wallet = "1111111111") => {
        console.log(`UNLIKING post from: ${owner} with Id: ${postId} and userKey: ${wallet}`)
    }




    return (
        <div className={style.wrapper}>
            <AiOutlineHeart className={style.icon} size={24} onClick={() => staticLikePost(owner, postId, wallet?.publicKey)} />
            <RiDislikeFill className={style.icon} size={24} onClick={() => staticDislikePost(owner, postId, wallet?.publicKey)} />
            <FaEdit className={style.icon} size={22} onClick={() => toggleEditPostModal(true, postId, owner)} />
            < div className='flex-1' />

        </div>
    )
}

export default ActionButtons
