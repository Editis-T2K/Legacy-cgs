package org.t2k.cgs.domain.usecases.packaging;

/**
 * Created with IntelliJ IDEA.
 * User: asaf.shochet
 * Date: 10/09/14
 * Time: 15:54
 * To change this template use File | Settings | File Templates.
 */
public interface PackageResourceHandler {

    void copyCourseResourcesForPublish(CGSPackage cgsPackage) throws Exception ;

    void setCanceled(boolean isCanceled);
}