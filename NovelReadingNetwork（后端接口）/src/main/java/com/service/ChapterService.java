package com.service;

import com.pojo.ChapterInfo;

import java.util.List;

public interface ChapterService {

    boolean Insert(ChapterInfo info);

    boolean Update(ChapterInfo info);

    List<ChapterInfo> Select(ChapterInfo info);

    List<ChapterInfo> SelectChapterList(ChapterInfo info);

}
