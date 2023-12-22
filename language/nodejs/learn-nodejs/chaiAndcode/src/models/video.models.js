import mongoose,{Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = mongoose.Schema({
    videoFile : {
        type: String,
        require: true
    },
    thumbile:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    duration:{
        type: Number,
        require: true
    },
    views:{
        type:number,
        default:0
    },
    isPublished:{
        type: Boolean,
        default: true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

    
},
{
    timestamp: true
})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model('Video',videoSchema);