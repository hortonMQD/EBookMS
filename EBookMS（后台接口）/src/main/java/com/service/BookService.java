package com.service;

import com.pojo.BookInfo;

import java.util.List;

public interface BookService {

    public List<BookInfo> SelectBook(BookInfo info);

    public boolean UpdateBook(BookInfo info);

    public boolean InsertBook(BookInfo info);



}
