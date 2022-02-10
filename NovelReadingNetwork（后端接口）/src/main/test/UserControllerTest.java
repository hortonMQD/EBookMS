import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-*.xml"})
public class UserControllerTest {

    @Autowired
    private UserController userController;



    @Test
    public void SelectUserTest(){
        //&amp;characterEncoding=utf8
        //&amp;characterEncoding=UTF-8

        UserInfo info = new UserInfo();
        //info.setUserID("双目");
        info.setEmail("qweqwe");
//        ResultInfo result = userController.SelectUser(info);
//        System.out.println("这里是　UserControllerTest   查询结果：："+result.getMsg());
    }


    @Test
    public void InsertUserTest(){
        //insert into user_info {userID,email,coinCount,password,isOnline,loginTime,isDelete} values(?,?,0,?,'0',NOW(),'0');
        UserInfo info = new UserInfo();
      //  info.setUserID("王令");
        info.setEmail("qweqwe");
        info.setPassword("123456");
        ResultInfo result = userController.InsertUser(info);
        System.out.println("这里是　UserControllerTest   执行结果：："+result);

    }


}
