import com.pojo.BookInfo;
import com.pojo.UserInfo;
import com.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-*.xml"})
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void UserSelectTest(){
        UserInfo info = new UserInfo();
        //info.setUserID("123123");
        System.out.println(userService.SelectUser(info));
    }

    @Test
    public void UserInsertTest(){
    }


    @Test
    public void UserUpdateTest(){
        UserInfo info = new UserInfo();
        info.setID("1");

        //info.setUserID("郭靖");
        System.out.println(userService.UpdateUser(info));
    }

}
