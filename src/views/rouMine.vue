<template>
  <div>
    <div class="section">
      <!-- 登錄註冊 -->
      <div class="index-module__mine-head___2obk2">
        <div class="index-module__user-info___2zJbj">
          <div class="taro-img index-module__photo___1UKfy">
            <img
              class="taro-img__mode-scaletofill"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAYAAABwWUfkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUUzRDBDNEE5QjI1MTFFNzg4RkRDMzk2Njc3NEZCN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk2RURGRjQ5QjI5MTFFNzg4RkRDMzk2Njc3NEZCN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRTNEMEM0ODlCMjUxMUU3ODhGREMzOTY2Nzc0RkI3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRTNEMEM0OTlCMjUxMUU3ODhGREMzOTY2Nzc0RkI3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmvTQqkAAB7sSURBVHja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"
            >
          </div>
          <div class="index-module__login-btn___2gQcD"  v-show="flag">
            <router-link to="login" style="color:#fff">登录/注册</router-link>
          </div>
          <!-- 登录之后 -->
          <div class="index-module__nick-name___17xqI" v-show="!flag">
            <div class>
              <!-- <span class="taro-text">眯眯侠</span> -->
              <div class="taro-img index-module__vip-icon___2vxsJ">
                <img
                  class="taro-img__mode-scaletofill"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwQURBQzU3NzJCMDExRTdBOUQ5RDc0NkFFMDIyNEI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwQURBQzU4NzJCMDExRTdBOUQ5RDc0NkFFMDIyNEI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDBBREFDNTU3MkIwMTFFN0E5RDlENzQ2QUUwMjI0QjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDBBREFDNTY3MkIwMTFFN0E5RDlENzQ2QUUwMjI0QjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BMNy+AAAFRklEQVR42nxWXWwUVRQ+c+dnZ6f7Y4F2u627/Qm0S1MIDxohEQF9EA1igomJCQHjE5gojya+kPiiJj6YqIk++KDEGBNFjIJArBGCAqKRpATQwBZYftbS3Xa3O7uzd/4857Yz3eLCTU5u2zv3fOd85zvnVqp99AoEy5ckUMxZYMu7EvkNe/ZXm6qs+Rwk/Dst2i3LglQqxRqNBtRqNU9V1cX7aDzaCX3F0zd7zn7xnmUsx0ssPFegZTHXAQ04XElvPNTU01t0fgc89OD7vgCybRsYY9Dd3Q3lclmYpmninJbrutDhmFDufwLYtYlCqnj+q3o8DZLvzftfzIqBXi/BVGb9vps9j2yRzBIosiIciHN0SFn19vZCNBoVu2EYQBkG5x5+qzIfmg0Lrg1v+9KKp3oj1qzwHYIFQGZndu3kyPb3VdcC37ZAUZQwKwKKx+OQTqdDSgcHB8FxnDAgotTFJLzKv8DjKSk/umOc+S7IjkU3EIzqxOsIK8Hk6ue/txUDdKcODauJdDOIRCLAuS1Ah4aGBIjneeL3ZDIJfX19YJqmoJgoldCP7bgQrU/DdNdY7vbg5nf0RnkhM7yo2TUoDD97YGbZSFbHjyhTiphM13WYm6sK2mKxWJhpsLLZbEgnZUaBUV3Jb8SqwPWVW9+Y6RnbSn5Z1LwL5Z6x7YWBJ3dq9TKRLxwSheSAABOJBGQymRCAwAJAcjwwMCCA6B4qVJyRZGRuosAkyK967mtb0Zk08+m+x66u23nSVhNahFfDYtIFzrkAyuVyS7JptwikUCiIPQAWhhnWo8ug88a5E0o1MbB5OtKjJcwiuJIPTF6MXJZlkVmxWBQ71SpQ3pKWwezISEQBEIlG1Na1oYlJFGJDm5SuO3+9W4FIfz69YW+HXQUF1QMtTVypVKBUKgnge0FawUggBEDfLXa5BxZEoImaWF374WXFQa2O5I+9Cq7TcS27aVcMAeUWQLpMKiNVBpndu1rrF9KNQE1fB+7IkKse3ZtxJz5jjiRDU9Yhlz+6O1M4daCiJsHFnoCFLMhBK4XtgOiMsgrHGgJxUMFEsKGZM6+lG39/XFc6qbsAHDUKlhqH4cmfdvXdOvvtnNyxBDBwJiTdBozOQopx55IKdTcCK8vH3+r3Tn1oR1UhPEbBMBSqjYCOEoVcYXzHitKl4xUlAa6Yi14IGCqsxZZkhd86kgI1MGBg6pe3h+ZO7nd19K76YlYxz6MLvmhCLkfAxqhGCj8/3TU1cbQixyFgL6CytQWWUEiDmIAkA/ru/v5Bdvbcmw35IbCRSjxA/wjmOBiNQxcwcsfGn1EUODHWXD74zIqpiROzSjIcsu3ABIUEiLWn4B6+ceKTkX+OvO6Y2DYlfH6uIwOFeftfEaj3uWoQI7Bm8tDm5eULp2alGA5YDArl3Qo0HwQOYqxHlRnQW/zt81WF8T2Or2BgMkgcGaNHoTlvrK3CELCpxUmKMFr8cWOimr80Bx1hLwVNT0AcGali9l3F84dHbozvtmUDuGaA4JUtvJjyvDEJg21njFNDxsTDMDz963qtVr5c9gyweXNBHFhj5HyGxaH71rljo5e/2+Y0cMT5GtCL67cxxe327zPt8APmYoYKRPxydW3t4OMX/KdOT7OVq1IyF4N2GlXXeffSmdErh7dK9FKgopk4kRb+SbiHsVvfvHQfMKSKegcjIloNZwbfuGTyj+SLE15nf8ZTfIjevvjnuqtHHsUH0rexbdoBtC5F4g+a5tJ8BXEzWRfgy1ZZXTq84bzywk21UTHHLh7cyDCiOtZXotf6wVjwnwADAI8fD5wj/WXaAAAAAElFTkSuQmCC"
                >
              </div>
            </div>
            <div class>
              <span class="taro-text index-module__mobile-t___3pzYS">{{uname}}</span>
            </div>
          </div>
          <!-- 登录之后 end -->
        </div>
        <div class="index-module__user-r___25GDl">
          <div class="index-module__user-msg-b___1sxJt" style="display: inline-block;">
            <div class="taro-img" style="width: 22px; height: 22px;">
              <img
                class="taro-img__mode-scaletofill"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI5RUY5QUU3Q0QyMTFFN0E0MTdFODc3RkM1MkM3N0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFGMDlDREM3Q0QyMTFFN0E0MTdFODc3RkM1MkM3N0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjlFRjlBQzdDRDIxMUU3QTQxN0U4NzdGQzUyQzc3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjlFRjlBRDdDRDIxMUU3QTQxN0U4NzdGQzUyQzc3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Poeg8UYAAAMXSURBVHja7JnbaxNBFMazjUlovVUtqIhiEazWR8VLRUR9FsUnX7y9CYIP6p+gYAV9F1vEFin6P3jDW6tSEA2I+KBgvZBqg4o1zc3vwLdwWLNxs5mdTaEHfuzSncz5OjtzzplZp1qtJmaTtSVmmZkWvB/kQYlMgQNGPciUMMRuUKz+ayU+M+LHMTiHv4DlMgbgA3DAGl6/ghUmnJgSnAS/QZrCV/Lvnyl0BnSActxzeBEYATmQ4t/eqOfufYptpO3COATLaD0Bk+AwWMJXL1ZU7dx7h22k7TfwmH1YWXQnwLRnYRXABLgNelTbDeAW+MQ22qSP4436b1TsdVD2OB0EqQC/TbOt/mfL7DMSwUOgQkdyHQeZEG8ow9/qvoZNCz6tRlauVwzE1MuePk+ZErxMzT/p+KLBZNOvRvoP6DIh+JWac2MGxbqMqf5fNpvpVoH3YB6YBp1MAiYtw5qjnYllLfgYNg4PUqzYQARixQrgmsqYA82k5u8M+AVmqGJEVaOk9B8c7Tx9NjzCC0iCaTUqsQm+uRzv5yu/DQler6bDqIXafFTVHT1hBG9S9cE9C4K1j94wgvU8mrAgWPtYGkawfla2IFj7cOY2oa0oOK3u2y1o6fDxHVhwr+U34TQbJfbwWgHPLQh+QV/ad+DU3A3eMnH8anbj2ID9ZJaTQ5iN4F2QEZZX81RluRGLa+omr+L7Uc3wVqPmvK/q00nQFkEN7EcS5JT/B/8r4M+oHYBsFtdZFOvSrTaqFWryFZxnwxmwJQaxLlupQWxKP/POYTfevuaqjcuegawqN30XXUlVaufUwrNpUl6eVbG4WC+s3QF7PQWJ7SN6h1sl1+6CfX6Ckzz32hzT6Hrf9jjYoRKKb+JYDE6CvjpJo497sCJjZhDbyTqhwMNEv+QheeAqd9PGTuCz6nDlUID2B9VJTzas32YEb+fnADcMXqjT9rwKU/KbbXF9MrgBjnChVHnYklMHIatBF8Ol22YYHIvzo8ylGme/tazAti3xUUaOsIbALhbiSRUW5dvHQ3CUhyQt8VFmbk/nZ38FGAB1wJ+8vDVVGwAAAABJRU5ErkJggg=="
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 我的錢包 -->
      <div class="index-module__wallet-list-box___g0vJu">
        <div class="index-module__wallet-list___1FLFt">
          <div class="index-module__wallet-item___BOz1B index-module__my-wallet-item____d2dg">
            <div class>
              <div class>
                <div class="index-module__wallet-icon-v___1k7HT">
                  <div class="taro-img index-module__wallet-icon___2JtOh">
                    <img
                      class="taro-img__mode-scaletofill"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBRDQwMzYwNzRDRDExRTdCRENFQTlGRTJCQTc2MTk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBRDQwMzYxNzRDRDExRTdCRENFQTlGRTJCQTc2MTk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUFENDAzNUU3NENEMTFFN0JEQ0VBOUZFMkJBNzYxOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUFENDAzNUY3NENEMTFFN0JEQ0VBOUZFMkJBNzYxOTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4YavcrAAACNklEQVR42tyau0vDUBjFT+rFBz7on6Cg6KIIPtBFEB+DWNHRQScnBVFBEdTJB6KD4ODSSXTWQZAqXQRBB3UWBP8GqQ4+uX7R+Eja2qa59ybXA4f7NSnJPfz63SQlBuccWDCqAKySO8ll+EvcRe1mdL8tQY5TNYstfmPweVTTh3NyGJkkcuK5Bkqu72hsYVSsZAwRHAqp6jCNK8z6OelGwVl3s7Q9EWwKzrqEaUzBVjONKaQJoiEFexCNKWRPJOAU3BEJMIW/iWhEITMRTSgkE9GUQmoiGlLwHkTU5OsiQMckUNEEFJTAi5hvFPqXgJ45iBJLOyGZvVDbKzTETxDVvdA1BdFivqxI5Y0SgvixIhWW2mfx9gwcTQNXu8ArfaF+CIisA3n5AnpE5nLqVGwGON2kEPh0nGpeBAysZh0k9H0SlXbqYgcgKB9+shyPeugRVRc1p74CmDRerM8uFQwiZk+YQR4tm3XbiIBVSzWRgTUKQDtOdj73t1OwwUVXQQw+bh1aZZBoInnl8qiQ7USqfHsh/DriT48cbvyTIJcHwP6y0CAGH6NDK352+K4b+ujmcQKobKbb+GKPQUZ9DJLLtjQjS1rfgxTExehPEAmBghckx1FdEBmBfCEigcLvMHKDSKagjohkCnKJKKQgl4hCCs57rYSQB6VstuVyzCxCkB5CH28PyH4a9Pp3bKrarmODD6OGdp6Rwzr0QgrdkVtD2ObX5isQ5D3yvUYU7sl75BbE+PW7AAMA8yflEEhfvYAAAAAASUVORK5CYII="
                    >
                  </div>
                </div>
                <span class="taro-text index-module__wallet-t___fl6VJ">我的钱包</span>
              </div>
            </div>
          </div>
          <div class="index-module__wallet-item___BOz1B">
            <div class>
              <div class="index-module__wallet-icon-v___1k7HT">
                <span class="taro-text index-module__wallet-num___34hLy">--</span>
              </div>
              <span class="taro-text index-module__wallet-t___fl6VJ">红包</span>
            </div>
          </div>
          <div class="index-module__wallet-item___BOz1B">
            <div class>
              <div class="index-module__wallet-icon-v___1k7HT">
                <span class="taro-text index-module__wallet-num___34hLy">--</span>
              </div>
              <span class="taro-text index-module__wallet-t___fl6VJ">优惠券</span>
            </div>
          </div>
          <div class="index-module__wallet-item___BOz1B">
            <div class>
              <div class="index-module__wallet-icon-v___1k7HT">
                <span class="taro-text index-module__wallet-num___34hLy">--</span>
              </div>
              <span class="taro-text index-module__wallet-t___fl6VJ">白条</span>
            </div>
          </div>
          <div class="index-module__wallet-item___BOz1B">
            <div class>
              <div class="index-module__wallet-icon-v___1k7HT">
                <span class="taro-text index-module__wallet-num___34hLy">--</span>
              </div>
              <span class="taro-text index-module__wallet-t___fl6VJ">鲜豆</span>
            </div>
          </div>
        </div>
      </div>
      <!-- main -->
      <div class="index-module__mine-list___3yULQ">
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t9868/270/2511111067/3262/6aadc8d0/59f861f1Naec07388.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">我的关注</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t10027/230/2493387830/923/f504dba5/59f861f4Nb4f14ccb.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">我的评价</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t9811/293/2478111344/1683/8961ef6f/59f86219Na63aa49b.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">我的地址</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t17428/3/490670956/3441/7e2eab5e/5a8fbd40Ne55dd10d.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">我的卡包</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t1/23795/8/14599/5082/5cb6a02cE2037ef90/ced0ef2a54429883.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">红包套餐</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t23233/280/2196671515/5033/6b340bfc/5b75486fN25a59b73.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">我的奖励金</span>
            </div>
          </div>
          <div class="index-module__msg-red-point-small___3lXpn"></div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t14011/257/2679918788/2273/b6ad577c/5a4b618cN592138dc.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">签到有惊喜</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t9754/192/2495883922/1723/1c46efff/59f86201Nbb2b1e3a.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">退款/售后</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t11974/189/796512777/1121/cde5b0de/59f8622cNa78b328b.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">客服反馈</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t10918/293/2513298199/1837/dc976e21/59f8623aN0de96396.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">帮助中心</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t21829/127/1201691698/3425/747e8042/5b225111Nce6fb324.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">配送员注册</span>
            </div>
          </div>
          <div class="index-module__msg-red-point-small___3lXpn"></div>
        </div>
        <div class="index-module__mine-item____nDyI">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t7294/354/3886152423/1137/b1def6c9/59f86273N0c5a763c.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">关于我们</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI" style="border: none;">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t1/32251/12/8345/2337/5c9d84faE5bfd57ab/1660b594b3a2578a.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">金融权益</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI" style="border: none;">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t29926/78/1098663209/4480/ec295b2e/5c05f767N9ba4149a.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">掌生有礼</span>
            </div>
          </div>
        </div>
        <div class="index-module__mine-item____nDyI" style="border: none;">
          <div class>
            <div class="taro-img index-module__user-item-icon___C28j7">
              <img
                class="taro-img__mode-scaletofill"
                src="https://img30.360buyimg.com/mobilecms/jfs/t1/68145/9/1289/5413/5cf8bdb1E75076d21/a598ae7bcf1dec39.png"
              >
            </div>
            <div class>
              <span class="taro-text index-module__user-item-text___1CtOU">高额白金卡</span>
            </div>
          </div>
        </div>
      </div>
      <!-- main end -->
    </div>
    <section v-show="showLoginOut">
      <div class="bar"></div>
      <div class="index-module__logout-btn___1WQ3O">
        <span class="taro-text" @click="Loginout">退出账号</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoginOut: false,//是否显示退出
      flag:true,
      uname:""
    };
  },
  created(){
    this.isShowLogin();

  },
  methods:{
    isShowLogin(){
      // var a =this.$store.state.isLogin
      //  console.log(a);
      //  console.log(this);
       var b=this.$store.state.username.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3");
       if(b){
         this.flag=!this.flag;
         this.uname=b;
         this.showLoginOut=true;
       }else{
         this.flag=!this.flag;
         this.showLoginOut=false;
       }
    },
    Loginout(){
       this.$nextTick(function(){
        this.flag=!this.flag;
       localStorage.removeItem('username');
       this.$store.state.username="";
      //  console.log(this.$store.state);
       this.showLoginOut=false;
       });
    },
  },

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 登录后的 */
.index-module__mine-head___2obk2 .index-module__nick-name___17xqI {
    padding-left: .42667rem;
    font-size: .55467rem;
    color: #fff;
}
.index-module__mine-head___2obk2 .index-module__vip-icon___2vxsJ {
    width: .64rem;
    height: .55467rem;
    margin: .17067rem 0 0 .34133rem;
    vertical-align: top;
}
.taro-img__mode-scaletofill {
    width: 100%;
    height: 100%;
}
.index-module__mine-head___2obk2 .index-module__mobile-t___3pzYS {
    color: #fff;
}
.taro-img {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 0;
    width: 320px;
    height: 240px;
}
/*  退出*/
.index-module__logout-btn___1WQ3O {
  margin: 10px 0;
  height: 1.96267rem;
  color: #ff5757;
  text-align: center;
  font-size: 0.68267rem;
  line-height: 1.96267rem;
  background-color: #fff;
  margin-top: 10px;
}
.taro-text {
  user-select: none;
}
html {
  background: #f4f4f4;
}
.bar {
  background: #f4f4f4;
  width: 100%;
  height: 10px;
}
.index-module__mine-head___2obk2 {
  color: red;
  background: #fff;
  background-image: url(//static-o2o.360buyimg.com/daojia/user/.//images/my_bgnew.png);
  background-size: 100% 100%;
  min-height: 7.1875rem;
  overflow: hidden;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.index-module__mine-head___2obk2 .index-module__user-info___2zJbj {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.index-module__mine-head___2obk2 .index-module__photo___1UKfy {
  margin-left: 0.68267rem;
  width: 2.60267rem;
  height: 2.60267rem;
  border-radius: 2.13333rem;
  border: solid 2px #fff;
}
.taro-img {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
}
.taro-img__mode-scaletofill {
  width: 100%;
  height: 100%;
}
.index-module__mine-head___2obk2 .index-module__login-btn___2gQcD {
  display: inline-block;
  padding: 0.29867rem 0.42667rem;
  height: 1.28rem;
  font-size: 0.59733rem;
  border-radius: 0.08533rem;
  line-height: 0.68267rem;
  margin-left: 0.21333rem;
  color: #fff;
  background: #69c575;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.index-module__mine-head___2obk2 .index-module__user-r___25GDl {
  position: relative;
}
.index-module__mine-head___2obk2
  .index-module__user-r___25GDl
  .index-module__user-msg-b___1sxJt {
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  padding: 0.42667rem;
  position: relative;
}
element.style {
  width: 22px;
  height: 22px;
}
.taro-img {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
}
.taro-img__mode-scaletofill {
  width: 100%;
  height: 100%;
}

/* 我的钱包 */
body {
  line-height: 1.6;
  font-family: -apple-system-font, "Helvetica Neue", sans-serif;
}
.index-module__wallet-list-box___g0vJu {
  height: 4.375rem;
  background: #fff;
}
.index-module__wallet-list___1FLFt {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 4.0625rem;
  padding-bottom: 1.5625rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAACgCAYAAABT0On/AAAAGXRFW…sAACDcAQBAuAMAAMIdAACEOwAAINwBAADhDgAA8+dfAQYAYKCn2pV7QBYAAAAASUVORK5CYII=)
    center no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  left: 0;
  top: 4.39467rem;
  z-index: 1;
}
.index-module__wallet-list___1FLFt
  .index-module__wallet-item___BOz1B.index-module__my-wallet-item____d2dg {
  padding-right: 0.42667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAABYCAYAAADWSIbPAAAAGXRFW…Li/xmBWjEEwTqAEifQBcEAKDERiBlHo3ZUYlRi2EoABBgAhlo1bGmtt1cAAAAASUVORK5CYII=)
    center right no-repeat;
}
.index-module__wallet-list___1FLFt .index-module__wallet-item___BOz1B {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.512rem;
  position: relative;
  height: 2.13333rem;
}
.index-module__wallet-list___1FLFt .index-module__wallet-item___BOz1B {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.512rem;
  position: relative;
  height: 2.13333rem;
}

.index-module__wallet-list___1FLFt
  .index-module__wallet-item___BOz1B
  .index-module__wallet-icon___2JtOh {
  width: 1.5625rem;
  height: 1.5625rem;
}
.taro-img {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
}
.taro-img__mode-scaletofill {
  width: 100%;
  height: 100%;
}
.index-module__wallet-list___1FLFt
  .index-module__wallet-item___BOz1B
  .index-module__wallet-t___fl6VJ {
  color: #333;
  line-height: 1.06667rem;
  font-size: 13px;
}
.taro-text {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* .index-module__wallet-list___1FLFt
  .index-module__wallet-item___BOz1B
  .index-module__wallet-icon___2JtOh {
  width: 1.06667rem;
  height: 1.06667rem;
} */

/* main */
.index-module__mine-list___3yULQ {
  background: #fff;
  margin-top: 10px;
}
body {
  line-height: 1.6;
  font-family: -apple-system-font, "Helvetica Neue", sans-serif;
}
.index-module__mine-list___3yULQ .index-module__mine-item____nDyI {
  position: relative;
  display: inline-block;
  width: 25%;
  height: 5.5625rem;
  text-align: center;
  border-bottom: solid 0.02133rem #e8e8e8;
}
.index-module__mine-list___3yULQ
  .index-module__mine-item____nDyI
  .index-module__user-item-icon___C28j7 {
  width: 2.75rem;
  height: 2.75rem;
}
.taro-img {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
}
.index-module__mine-list___3yULQ
  .index-module__mine-item____nDyI
  .index-module__user-item-text___1CtOU {
  font-size: 13px;
  color: #333;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.taro-text {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

