package com.service;

import com.pojo.NovelInfo;

import java.util.List;

public interface NovelService {

    boolean Insert(NovelInfo info);

    boolean Update(NovelInfo info);

    List<NovelInfo> Select(NovelInfo info);

    List<NovelInfo> SelectUpdateNovelChapter(NovelInfo info);

    List<NovelInfo> ReviewsTheNovel(NovelInfo info);

}
