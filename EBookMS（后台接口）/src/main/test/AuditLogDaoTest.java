import com.dao.AuditLoggingDao;
import com.pojo.BookInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-*.xml"})
public class AuditLogDaoTest {

    @Autowired
    private AuditLoggingDao auditLoggingDao;

    @Autowired
    private BookInfo info;

    @Test
    public void InsertAuditLogTest(){
        System.out.println("这里是AuditLogDaoTest     主键为"+info.getID());
        int result = auditLoggingDao.InsertAuditLogging(info);
        System.out.println("这里是AuditLogDaoTest     主键为"+info.getID());
    }

}
