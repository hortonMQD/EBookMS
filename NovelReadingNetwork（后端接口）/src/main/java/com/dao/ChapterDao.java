package com.dao;

import com.pojo.ChapterInfo;

import java.util.List;

public interface ChapterDao  extends DAO{

    public List<ChapterInfo> Select(ChapterInfo info);

    public List<ChapterInfo> SelectChapterList(ChapterInfo info);

    public int Update(ChapterInfo info);

    public int Insert(ChapterInfo info);

}
