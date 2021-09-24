function getLocation(options?: PositionOptions): Promise<Position> {
  return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}


/**
 * 緯度経度をを取得
 * @return {Array<number>|null}
 */
export const getPosition = async () => {
  if('geolocation' in navigator) {
    /* geolocation is available */
    return getLocation()
  } else {
    /* geolocation IS NOT available */
    return null
  }
}


export const getAllPosts = () => {
  return ({
    "status": "ok",
    "count": 3,
    "data": [
        {
            "id": 1,
            "garigariName": "takapiro",
            "comment": "きれい～",
            "lat": 43,
            "lng": 141,
            "photoUrl": "https://thumb.photo-ac.com/ae/ae0849b14c2295c222ec346b9571389f_t.jpeg",
            "genre": "風景",
            "favorites": 0,
        },
        {
            "id": 1,
            "garigariName": "usatyo",
            "comment": "きれいすぎる",
            "lat": 43.1,
            "lng": 141.1,
            "photoUrl": "https://thumb.photo-ac.com/ae/ae0849b14c2295c222ec346b9571389f_t.jpeg",
            "genre": "風景",
            "favorites": 0,
        },
        {
            "id": 1,
            "garigariName": "takapiro2",
            "comment": "きれい",
            "lat": 43.2,
            "lng": 141.2,
            "photoUrl": "https://thumb.photo-ac.com/ae/ae0849b14c2295c222ec346b9571389f_t.jpeg",
            "genre": "風景",
            "favorites": 0,
        }
    ]
})
}

/**
 * 投稿
 * @param {string} garigariName
 * @param {string} comment
 * @param {number} lat
 * @param {number} lng
 * @param {*} image
 * @return {boolean} 成功した場合 true
 */
export const postToServer = (garigariName, comment, lat, lng, image) => {
  // TODO: 投稿する
  // TODO: form-data として投稿する
  return true
}

/**
 * 一回いいねする
 * @param {number} postId 投稿のID
 * @return {boolean} 成功した場合 true
 */
export const favorite = (postId) => {
  // TODO: いいねする
  return true
}