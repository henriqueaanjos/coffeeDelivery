import ExpressoTradicionalSvg from '@assets/coffee/Expresso.svg';
import ExpressoAmericanoSvg from '@assets/coffee/Americano.svg';
import ExpressoCremosoSvg from '@assets/coffee/Expresso_Cremoso.svg';
import LatteSvg from '@assets/coffee/Latte.svg';
import ExpressoGeladoSvg from '@assets/coffee/Cafe_Gelado.svg';
import CapuccinoSvg from '@assets/coffee/Capuccino.svg';
import MocaccinoSvg from '@assets/coffee/Mochaccino.svg';
import ChocolateQuenteSvg from '@assets/coffee/Chocolate_Quente.svg';
import CubanoSvg from '@assets/coffee/Cubano.svg';
import HavaianoSvg from '@assets/coffee/Havaiano.svg';
import ArabeSvg from '@assets/coffee/Arabe.svg';
import IrlandesSvg from '@assets/coffee/Irlandes.svg';

export function selectCoffePhoto(id: number){
    switch(id){
        case 1:
            return ExpressoTradicionalSvg;
        case 2:
            return ExpressoAmericanoSvg;
        case 3:
            return ExpressoCremosoSvg;
        case 4:
            return LatteSvg;
        case 5:
            return ExpressoGeladoSvg;
        case 6:
            return CapuccinoSvg;
        case 7:
            return MocaccinoSvg;
        case 8:
            return ChocolateQuenteSvg;
        case 9:
            return CubanoSvg;
        case 10:
            return HavaianoSvg;
        case 11:
            return ArabeSvg;
        case 12:
            return IrlandesSvg;
        default:
            return IrlandesSvg;
    }
}