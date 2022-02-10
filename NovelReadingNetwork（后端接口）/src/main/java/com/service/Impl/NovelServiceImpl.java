package com.service.Impl;

import com.dao.AuditLogDao;
import com.dao.NovelDao;
import com.pojo.AuditLogInfo;
import com.pojo.NovelInfo;
import com.service.AuditLogService;
import com.service.NovelService;
import com.util.BasicUtil;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Service("novelService")
@Transactional(rollbackFor = Exception.class)
public class NovelServiceImpl implements NovelService {


    @Autowired
    private NovelDao novelDao;

    @Autowired
    private AuditLogService auditLogService;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Insert(NovelInfo info) {
        boolean result = ServiceUtil.InsertNovel_Chapter(novelDao,info,new AuditLogInfo(),"1",auditLogService);
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(NovelInfo info) {
        return ServiceUtil.Update(novelDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<NovelInfo> Select(NovelInfo info) {
        return novelDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<NovelInfo> ReviewsTheNovel(NovelInfo info) {
        return novelDao.ReviewsTheNovel(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<NovelInfo> SelectUpdateNovelChapter(NovelInfo info) {
        return novelDao.SelectUpdateNovelChapter(info);
    }
}
