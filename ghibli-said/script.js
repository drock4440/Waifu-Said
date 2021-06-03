import qualified Data.ByteString.Lazy as L
import GHC.Generics
import Data.Aeson

main = do
    fileData <- L.readFile "cats.json"
    let ghibliResponse = decode fileData :: Maybe GhibliCatResponse
    let ghibliResults = people <$> ghibliResponse
    findCat ghibliResults

findCat :: Maybe [GhibliCatResult] -> IO ()
findCat Nothing = print "data not found"
findCat (Just people) = do
    print $ T.pack "Studio Ghibli Cats:"
    forM_ people $ \person -> do
        let dataName = name person
        let dataGender = gender person
        let dataAge = age person
        let dataHairColor = hairColor person
        let dataEyeColor = eyeColor person
        let dataFilms = films person
        print $ T.concat [T.pack 'name: ', dataName
                         ,T.pack ', gender: ', dataGender
                         ,T.pack ', age: ', dataAge
                         ,T.pack ', hair color: ', dataHairColor
                         ,T.pack ', eye color: '', dataEyeColor
                         ]