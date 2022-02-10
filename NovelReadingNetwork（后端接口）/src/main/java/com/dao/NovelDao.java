package com.dao;

import com.pojo.NovelInfo;

import java.util.List;

public interface NovelDao  extends DAO{

    public List<NovelInfo> Select(NovelInfo info);

    public List<NovelInfo> ReviewsTheNovel(NovelInfo info);

    List<NovelInfo> SelectUpdateNovelChapter(NovelInfo info);

    public int Update(NovelInfo info);

    public int Insert(NovelInfo info);

}
