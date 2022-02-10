package com.service.Impl;

import com.dao.ChapterDao;
import com.dao.NovelDao;
import com.pojo.AuditLogInfo;
import com.pojo.ChapterInfo;
import com.pojo.NovelInfo;
import com.service.AuditLogService;
import com.service.ChapterService;
import com.service.NovelService;
import com.util.BasicUtil;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Service("chapterService")
@Transactional(rollbackFor = Exception.class)
public class ChapterServiceImpl implements ChapterService {

    @Autowired
    private ChapterDao chapterDao;

    @Autowired
    private NovelDao novelDao;

    @Autowired
    private AuditLogService auditLogService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Insert(ChapterInfo info) {
        try {

            AuditLogInfo auditLogInfo = new AuditLogInfo();
            if (ServiceUtil.InsertNovel_Chapter(chapterDao,info,auditLogInfo,"2",auditLogService)) {
                NovelInfo novelInfo = new NovelInfo();
                novelInfo.setID(info.getNovel().getID());
                novelInfo.setNovelRecentUpdatesTime("1");
                novelInfo.setNovelRecentUpdatesChapters(auditLogInfo.getID());
                return ServiceUtil.Update(novelDao,novelInfo);
            } else {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                return false;
            }
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(ChapterInfo info) {
        return ServiceUtil.Update(chapterDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<ChapterInfo> Select(ChapterInfo info) {
        return chapterDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<ChapterInfo> SelectChapterList(ChapterInfo info) {
        return chapterDao.SelectChapterList(info);
    }
}
