import {React,useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import './posts.scss'

function Posts({ Data, communitynames }) {

    const [active,setActive]=useState(false)

    return (
        <>
            {Data && Data.map(post => (
                <>
                    {post.posts && post.posts.map(p => (
                        <>
                            {p.generalpost && p.generalpost.map(general => (
                                <div className='posts'key={general.id}>
                                    {console.log(general.details)}
                                    <div className="container">
                                        <div className="top">
                                            <div className="title">
                                                <h4>{general.title}</h4>
                                            </div>
                                            <div className="user">
                                                <span>By:{general.by}</span>
                                            </div>
                                        </div>
                                        <div className="postdetails">
                                            <p>{general.details}</p>
                                        </div>
                                        <div className="icons">
                                            { active?<FavoriteIcon/>:<FavoriteBorderIcon onClick={()=>setActive(prev=>!prev)} />}
                                            <InsertCommentIcon />
                                            <ShareIcon />

                                        </div>
                                    </div>
                                </div>))}
                        </>
                    ))}
                </>
            ))}
        </>

    )
}

export default Posts