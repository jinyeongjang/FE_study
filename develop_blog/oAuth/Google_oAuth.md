# Google OAuth Key 발급하기 순서.

1. 구글 OAuth Key 를 발급하기 위해 링크에 먼저 들어간다.

    https://console.cloud.google.com/apis/

2. Google Cloud 로고 부분 우측에 세게의 동그라미 점을 선택한다.

    Select a project 부분이 나오면 NEW PROJECT를 누른다.

3. 생성할 Project 이름을 지정해준뒤에 CREATE 버튼을 누른다.

4. 왼쪽 Credentials 버튼을 누른뒤, + CREATE CREDENTIALS 누르고 - OAuth client 를 누른다.

5. Application type 은 Web application 눌러주고, Name 원하는 이름을 지정해준다.

6. Authorized JavaScript Origins 는 해당사항이 없으므로 건너뛰고,

    Authorized redirect URIs부분에서

    http://localhost:4000/auth/google/callback을 적어주고 SAVE를 누른다.

7. Additional Information - Client ID 부분을 메모장에 적어서 보관해준다.

    Client secrets 부분도 복사하여 메모장에 적어서 보관해준다.

-   인증을 하기위해 추가절차인, https://support.google.com/workspacemigrate/answer/9222992?hl=ko  
    이 문서를 참고하여 웹 클라이언트 ID를 만들어준다.

*   구글보안정책에 따라, 사용자는 반드시 웹 클라이언트 ID 가 생성이 되어야 권한을 받을 수 있다.
