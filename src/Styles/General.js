import colors from './Colors';
import metrics from './Metrics';
import fonts from './Fonts';

export default {
    structure: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        padding: metrics.basePadding,
    },
    subTxt2: {
        color: colors.regular2,
        fontSize: 18,
        margin: 0,
        paddingHorizontal: 4,
        marginTop: 8,
        fontFamily: fonts.sf400,
    },
    subTxt: {
        color: colors.regular2,
        fontSize: 18,
        margin: 0,
        padding: 0,
        fontFamily: fonts.sf400,
    },
    label: {
        color: colors.secundary,
        fontSize: 16,
        margin: 0,
        padding: 0,
        fontFamily: fonts.sf400,
    },
    input: {
        height: 40,
        marginTop: metrics.baseMargin,
        marginBottom: 15,
        backgroundColor: colors.backgroundInput,
        borderColor: colors.borderInput,
        borderWidth: 1,
        color: colors.regular,
        fontSize: 16,
        fontFamily: fonts.sf400,
        padding: metrics.basePadding,
    },
};