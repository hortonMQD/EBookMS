import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-*.xml"})
public class ClassServiceTest {

    @Autowired
    private ClassService classService;

    @Test
    public void ClassSelectTest(){
        ClassInfo info = new ClassInfo();
        info.setName("武侠仙侠");
        System.out.println(classService.SelectClass(info));
    }


    @Test
    public void ClassInsertTest(){
        ClassInfo info = new ClassInfo();
        //info.setName("计算机网络");
        System.out.println(classService.InsertClass(info));
    }



}
