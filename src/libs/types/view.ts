import { ObjectId } from "mongoose";
import { ViewGroup } from '../enums/view.enoum';

export interface View {
    _id: ObjectId;
    viewGroup: ViewGroup;
    memberId: ObjectId;
    viewRefID: ObjectId;
    createdAt: Date;
    uptadedAt: Date;
}

export interface ViewInput {
    memberId: ObjectId;
    viewRefId: ObjectId;
    viewGroup: ViewGroup;
}