import Image from 'next/image'
import DisplayName from '../common/DisplayName'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalState } from "../../hooks";
import { truncate } from '../../utils/truncate';

const style = {
    wrapper: `feed-item-header pl-4 pr-4 bg-white flex items-center`,
    profileImageContainer: `relative h-[2rem] w-[2rem] rounded-full overflow-hidden`,
    image: `object-cover`,
    usernameContainer: `feed-item-header-text text-14-bold mr-1 ml-4 cursor-pointer`,
    moreIcon: `ml-auto flex`,
}


const PostHeader = ({ username, owner, postId }) => {

    const staticDeletePost = (owner, postId) => {
        console.log(`deleting post from: ${owner} with Id: ${postId}`)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.profileImageContainer}>
                <Image
                    src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                    layout='fill'
                    alt={username}
                    className={style.image}
                />
            </div>

            <DisplayName className={style.usernameContainer} username={truncate(username)} />

            <button className={style.moreIcon}>
                <AiOutlineClose onClick={() => staticDeletePost(owner, postId)} />
            </button>
        </div>
    )
}

export default PostHeader
