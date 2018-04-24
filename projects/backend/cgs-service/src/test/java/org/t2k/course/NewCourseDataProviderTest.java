package org.t2k.course;

import org.t2k.cgs.model.locales.ContentLocalesTypes;

/**
 * Created by thalie.mukhtar on 4/1/2016.
 */
public class NewCourseDataProviderTest {
    private ContentLocalesTypes courseLocale;

    NewCourseDataProviderTest(ContentLocalesTypes locale) {
        courseLocale = locale;
    }

    public ContentLocalesTypes getCourseLocale() {
        return courseLocale;
    }

}