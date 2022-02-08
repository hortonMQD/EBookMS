package com.dao;

import com.pojo.BookInfo;

import java.util.List;

public interface BookDao {

    public List<BookInfo> SelectBookInfo(BookInfo info);

    public int UpdateBookInfo(BookInfo info);

    public int InsertBookInfo(BookInfo info);


}
