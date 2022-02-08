import com.controller.ClassController;
import com.pojo.ClassInfo;
import com.pojo.ResultInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-*.xml"})
public class ClassControllerTest {

    @Autowired
    private ClassController classController;

    @Test
    public void SelectClassTest(){
        ClassInfo info = new ClassInfo();
        info.setName("武侠仙侠");
//        ResultInfo result = classController.SelectUser(info);
//        System.out.println(result.getMsg());
    }


}
