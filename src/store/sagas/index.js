import {AppMiddleware} from '../middlewares';
import {takeLatest, all, take} from 'redux-saga/effects';
import {
  ADD_POST,
  GET_ALL_USERS,
  GET_DROPDOWN_DATA,
  GET_EDIT_PROFILE,
  GET_MATCHES,
  GET_POSTS,
  GET_PROFILE,
  LOGOUT,
  SIGNIN,
  SIGNUP,
  SOCIAL_LOGIN,
  UPDATE_DISLIKE,
  UPDATE_LIKE,
  UPDATE_PROFILE,
  FORGET_PASSWORD,
  HOME_FILTER,
  STAR_RATING,
  DIARY_LIST,
  ADD_DIARY,
  SAVE_ALBUM,
  GET_ALBUM,
  ADD_FCM_TOKEN,
  REMOVE_FCM_TOKEN,
  GET_CHAT_LIST,
  GET_MESSAGE_HISTORY,
  ON_SEND_MEESSAGE,
  IN_APP_CHAT,
  GET_PROFILE_STATS,
  GET_VIDEO_CALL_TOKEN,
  ACCEPT_CALL,
  DECLINE_CALL,
  CALL_ENDED,
  VALIDATE_EMAIL,
  READ_CHAT,
  GET_USER_REPORT_DATA,
  ADD_USER_REPORT_DATA,
  ADD_STORY,
  GET_STORY,
  UPDATE_ALBUM_ACTIVE,
  GENERATE_ALBUM_CODE,
  APPLY_ALBUM_CODE,
  GET_LIVE_STREAM,
  CREATE_LIVE_STREAM,
  START_NEW_STREAM,
  JOIN_STREAM,
  END_STREAM,
} from '../constants';

export function* Sagas() {
  yield all([
    yield takeLatest(GET_DROPDOWN_DATA, AppMiddleware.getDropDownData),
    yield takeLatest(SIGNIN, AppMiddleware.SignIn),
    yield takeLatest(SIGNUP, AppMiddleware.SignUp),
    yield takeLatest(ADD_POST, AppMiddleware.AddPost),
    yield takeLatest(GET_POSTS, AppMiddleware.GetPosts),
    yield takeLatest(SOCIAL_LOGIN, AppMiddleware.onSocialLogin),
    yield takeLatest(GET_ALL_USERS, AppMiddleware.GetAllUsers),
    yield takeLatest(UPDATE_LIKE, AppMiddleware.UpdateLIke),
    yield takeLatest(UPDATE_DISLIKE, AppMiddleware.UpdateDisLIke),
    yield takeLatest(GET_MATCHES, AppMiddleware.GetMatches),
    yield takeLatest(GET_PROFILE, AppMiddleware.GetProfile),
    yield takeLatest(GET_EDIT_PROFILE, AppMiddleware.GetEditProfile),
    yield takeLatest(HOME_FILTER, AppMiddleware.HomeFilter),
    yield takeLatest(UPDATE_PROFILE, AppMiddleware.UpdateProfile),
    yield takeLatest(LOGOUT, AppMiddleware.Logout),
    yield takeLatest(FORGET_PASSWORD, AppMiddleware.ForgetPassword),
    yield takeLatest(STAR_RATING, AppMiddleware.HandleStarRating),
    yield takeLatest(DIARY_LIST, AppMiddleware.HandleDiaryList),
    yield takeLatest(ADD_DIARY, AppMiddleware.HandleAddDiary),
    yield takeLatest(SAVE_ALBUM, AppMiddleware.SaveAlbumPictures),
    yield takeLatest(GET_ALBUM, AppMiddleware.GetAlbum),
    yield takeLatest(ADD_FCM_TOKEN, AppMiddleware.addFcmToken),
    yield takeLatest(REMOVE_FCM_TOKEN, AppMiddleware.RemoveFcmToken),
    yield takeLatest(GET_CHAT_LIST, AppMiddleware.GetChatList),
    yield takeLatest(GET_MESSAGE_HISTORY, AppMiddleware.GetMessageHistory),
    yield takeLatest(ON_SEND_MEESSAGE, AppMiddleware.OnSendMessage),
    yield takeLatest(IN_APP_CHAT, AppMiddleware.InAppChat),
    yield takeLatest(GET_PROFILE_STATS, AppMiddleware.GetProfileStats),
    yield takeLatest(GET_VIDEO_CALL_TOKEN, AppMiddleware.GetVideoCallToken),
    yield takeLatest(ACCEPT_CALL, AppMiddleware.AcceptCall),
    yield takeLatest(DECLINE_CALL, AppMiddleware.DeclineCall),
    yield takeLatest(CALL_ENDED, AppMiddleware.CallEnded),
    yield takeLatest(VALIDATE_EMAIL, AppMiddleware.ValidateEmail),
    yield takeLatest(READ_CHAT, AppMiddleware.ReadChat),
    yield takeLatest(GET_USER_REPORT_DATA, AppMiddleware.GetReportData),
    yield takeLatest(ADD_USER_REPORT_DATA, AppMiddleware.AddReportData),
    yield takeLatest(ADD_STORY, AppMiddleware.AddStory),
    yield takeLatest(GET_STORY, AppMiddleware.GetStory),
    yield takeLatest(UPDATE_ALBUM_ACTIVE, AppMiddleware.UpdateAlbumisPrivate),
    yield takeLatest(GENERATE_ALBUM_CODE, AppMiddleware.GenerateAlbumCode),
    yield takeLatest(APPLY_ALBUM_CODE, AppMiddleware.ApplyAlbumCode),
    // live stream middle wear
    yield takeLatest(GET_LIVE_STREAM, AppMiddleware.GetLiveStreams),
    yield takeLatest(CREATE_LIVE_STREAM, AppMiddleware.CreateLiveStream),
    yield takeLatest(START_NEW_STREAM, AppMiddleware.StartNewStream),
    yield takeLatest(JOIN_STREAM, AppMiddleware.JoinStream),
    yield takeLatest(END_STREAM, AppMiddleware.EndStream),
  ]);
}
