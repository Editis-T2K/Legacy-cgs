package org.t2k.cgs.domain.usecases;

import org.t2k.cgs.domain.model.exceptions.DsException;
import org.t2k.cgs.domain.model.utils.IvonaBean;

/**
 * Created by IntelliJ IDEA.
 * User: ophir.barnea
 * Date: 13/08/13
 * Time: 17:31
 */
public interface NarrationService {

    public byte[] ivona(IvonaBean bn) throws DsException;
}
